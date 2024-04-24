const express = require('express');
import prisma from '@/libs/prismadb';
const app = express();
app.use(express.json());

// GET /api/students - Fetch all students
app.get('/api/leads', async (req, res) => {
  const leads = await prisma.user.findMany();
  res.json(leads);
});

/*
// GET /api/students/:id - Fetch a specific student by their ID
app.get('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  const student = await prisma.student.findUnique({
    where: { id: parseInt(id) }
  });
  if (!student) return res.status(404).send('Student not found');
  res.json(student);
});

// POST /api/students - Create a new student
app.post('/api/students', async (req, res) => {
  const { name, age, grade } = req.body;
  const student = await prisma.student.create({
    data: {
      name,
      age,
      grade
    }
  });
  res.json(student);
});

// PUT /api/students/:id - Update an existing student by their ID
app.put('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, grade } = req.body;
  const student = await prisma.student.update({
    where: { id: parseInt(id) },
    data: {
      name,
      age,
      grade
    }
  });
  res.json(student);
});

// DELETE /api/students/:id - Delete a student by their ID
app.delete('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.student.delete({
    where: { id: parseInt(id) }
  });
  res.send('Student deleted successfully');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
