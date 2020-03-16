import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import DateView from './DateView'
import { replaceTags } from './Tag'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

Note.propTypes = {
  id: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  edited: PropTypes.number,
  text: PropTypes.string.isRequired,
  onTagClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default function Note({
  id,
  created,
  edited,
  text,
  onTagClick,
  onDelete,
}) {
  return (
    <StyledNote>
      <NoteHeader>
        <DateView created={created} edited={edited} />
        <ActionLinks>
          <MdDelete onClick={() => onDelete(id)} />
          <Link to={'/edit/' + id}>
            <MdModeEdit />
          </Link>
        </ActionLinks>
      </NoteHeader>
      {replaceTags(text, onTagClick)}
    </StyledNote>
  )
}

const StyledNote = styled.section`
  box-shadow: 2px 2px 2px 2px lightgrey;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 8px;
  word-break: break-all;
`

const NoteHeader = styled.div`
  display: flex;
  align-items: center;
`

const ActionLinks = styled.div`
  margin-left: auto;

  * {
    margin-left: 8px;
    color: gray;
    font-size: 24px;
  }
`
