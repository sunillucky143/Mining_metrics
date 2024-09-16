const express = require('express');
const cors = require('cors');
const readline = require('readline');
const app = express();

app.use(cors());

app.get('/api/workflow', (req, res) => {
    const workflowData = {
        progress: 65
    };
    res.json(workflowData);
});

app.get('/api/reports', (req, res) => {
    const reports = [
        { id: 1, title: 'Annual Compliance Report', url: '/reports/annual-compliance.pdf' },
        { id: 2, title: 'Safety Audit 2024', url: '/reports/safety-audit-2024.pdf' }
    ];
    res.json(reports);
});

app.get('/api/key-metrics', (req, res) => {
    const metrics = {
        tailingsVolume: '500,000 tons',
        environmentalImpact: 'Moderate',
        safetyStatus: 'Safe'
    };
    res.json(metrics);
});

app.get('/api/monitoring', (req, res) => {
    const monitoringData = {
        contaminants: 'Low',
        environmentalMetrics: 'Within safe limits'
    };
    res.json(monitoringData);
});

const PORT = 3001;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Setup readline to listen for key presses
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Press "q" to quit the server.');

rl.on('line', (input) => {
    if (input.trim() === 'q') {
        console.log('Shutting down the server...');
        server.close(() => {
            console.log('Server closed.');
            process.exit(0);
        });
    }
});
