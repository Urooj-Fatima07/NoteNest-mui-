import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/notes')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log(data); // Check the structure of the fetched data
        setNotes(data.notes || data || []); // Adjust based on actual data structure
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to load notes. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/notes/${id}`, {
        method: 'DELETE',
      });
      const newNotes = notes.filter(note => note.id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.length > 0 ? (
          notes.map(note => (
            <Grid item xs={12} md={6} lg={4} key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))
        ) : (
          <Typography>No notes available.</Typography>
        )}
      </Grid>
    </Container>
  );
}
