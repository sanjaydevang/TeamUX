// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const path = require('path');

// // Store tasks in memory (you might want to use a database in production)
// let tasks = [];

// // Middleware to parse JSON body
// app.use(bodyParser.json());

// // Serve static files from current directory
// app.use('/', express.static(__dirname + '/'));

// // Get all tasks
// app.get('/get-tasks', function (req, res) {
//     const tasks = [
//         "write JS code",
//         "write HTML code",
//         "write CSS code"
//     ]
//     res.send({tasks: tasks})
//     try {
//         res.json(tasks);
//     } catch (error) {
//         console.error('Error getting tasks:', error);
//         res.status(500).json({ error: 'Failed to get tasks' });
//     }
// });

// // Save a new task
// app.post('/save-task', function (req, res) {
//     try {
//         const taskObj = req.body;
//         if (!taskObj || !taskObj.task) {
//             return res.status(400).json({ error: 'Invalid task data' });
//         }
//         tasks.push(taskObj.task);
//         console.log('Received task:', taskObj.task);
//         res.json({ message: 'Task saved successfully' });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Failed to save task' });
//     }
// });

// // Start the server
// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Store tasks in memory (you might want to use a database in production)
let tasks = [
    "write JS code",
    "write HTML code",
    "write CSS code"
];

// Middleware to parse JSON body
app.use(bodyParser.json());

// Serve static files from current directory
app.use('/', express.static(__dirname + '/'));

// Get all tasks
app.get('/get-tasks', function (req, res) {
    try {
        res.json(tasks); // Send tasks array directly
    } catch (error) {
        console.error('Error getting tasks:', error);
        res.status(500).json({ error: 'Failed to get tasks' });
    }
});

// Save a new task
app.post('/save-task', function (req, res) {
    try {
        const taskObj = req.body;
        if (!taskObj || !taskObj.task) {
            return res.status(400).json({ error: 'Invalid task data' });
        }
        tasks.push(taskObj.task);
        console.log('Received task:', taskObj.task);
        res.json({ message: 'Task saved successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to save task' });
    }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});