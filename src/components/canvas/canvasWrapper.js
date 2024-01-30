// canvasWrapper.js

import React, { useEffect } from 'react';
import * as d3 from 'd3';

const CanvasWrapper = () => {
    useEffect(() => {
        drawRandomGraph();
    }, []);

    const drawRandomGraph = () => {
        // Select the canvas element
        const canvas = d3.selectAll('.HomeBackground');

        // Get canvas dimensions
        var width = canvas.width;
        var height = canvas.height;

        // Generate random data for nodes
        const nodes = Array.from({ length: 10 }, (_, i) => ({ id: i }));

        // Generate random data for links
        const links = Array.from({ length: 15 }, () => ({
            source: Math.floor(Math.random() * nodes.length),
            target: Math.floor(Math.random() * nodes.length),
        }));

        // Create a force simulation
        const simulation = d3
            .forceSimulation(nodes)
            .force('link', d3.forceLink(links).id((d) => d.id))
            .force('charge', d3.forceManyBody().strength(-50))
            .force('center', d3.forceCenter(width / 2, height / 2));

        // Draw links
        const link = canvas
            .selectAll('line')
            .data(links)
            .enter()
            .append('line')
            .attr('stroke', '#ccc')
            .attr('stroke-width', 1);

        // Draw nodes
        const node = canvas
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('r', 8)
            .attr('fill', 'steelblue');

        // Update positions on each tick of the simulation
        simulation.on('tick', () => {
            link
                .attr('x1', (d) => d.source.x)
                .attr('y1', (d) => d.source.y)
                .attr('x2', (d) => d.target.x)
                .attr('y2', (d) => d.target.y);

            node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
        });
    };
    return (
        <div className="CanvasWrapper" >
            <canvas className="HomeBackground"></canvas>
        </div>
    );
};

export default CanvasWrapper;
