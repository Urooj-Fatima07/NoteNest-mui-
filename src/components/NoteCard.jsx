import { DeleteOutlined } from '@mui/icons-material'
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const useStyles = styled({
  test: {
    border: (note) => {
      if (note.category == 'work') {
        return '1px solid red'
      }
    }
  }
})

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note)

  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}