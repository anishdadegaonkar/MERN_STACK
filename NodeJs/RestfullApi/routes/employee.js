const express = require('express');
const router = express.Router();
const Employee = require('../model/Employee');

// GET all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new employee
router.post('/', async (req, res) => {
    const { EName, position, department, salary } = req.body;
    
    if (!EName || !position || !department || !salary) {
        return res.status(400).json({ message: "All fields are required" });
        
    }
    
    const newEmployee = new Employee({
        EName,
        position,
        department,
        salary
    });

    try {
        const employee = await newEmployee.save();
        res.status(201).json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT update an employee by id
router.put('/:id', async (req, res) => {
    const { EName, position, department, salary } = req.body;
    
    if (!EName || !position || !department || !salary) {
        return res.status(400).json({ message: "All fields are required" });
    }
    
    try {
        let employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        employee.EName = EName;
        employee.position = position;
        employee.department = department;
        employee.salary = salary;
        
        const updatedEmployee = await employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE an employee by id
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
