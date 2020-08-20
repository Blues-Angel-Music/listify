import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import Button from './button'
import EditorButtons from './editor-buttons'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const TabEditor = props => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [name, setName] = useState(props.tab.name)
  const [state, setState] = useState('init')

  useEffect(() => {
    setName(props.tab.name)
    const __editorState = getEditorStateFromContent(props.tab.content)
    if (__editorState) setEditorState(__editorState)
  }, [props.tab])

  useEffect(() => {
    const content = getContentFromEditorState(editorState)

    if (state === 'modified') {
      if (content === props.tab.content && name === props.tab.name) {
        setState('ready')
      }
    } else {
      if (content !== props.tab.content || name !== props.tab.name) {
        setState('modified')
      }
    }
  }, [editorState, name, props.tab.content, props.tab.name, state])

  const back = () => {
    if (
      state === 'modified' &&
      !window.confirm('Changes you have made will be lost. Continue?')
    ) {
      return
    }

    const __editorState = getEditorStateFromContent(props.tab.content)
    setEditorState(__editorState)
    setName(props.tab.name)

    setState('init')
    props.back()
  }

  const saveTab = () => {
    if (!name) {
      window.alert('Tab name must not be blank.')
      return
    }

    const content = getContentFromEditorState(editorState)

    props.updateTab({
      id: props.tab.id,
      name,
      content,
    })
    props.back()
  }

  const resetTab = () => {
    setName(props.tab.name)

    const __editorState = getEditorStateFromContent(props.tab.content)
    if (__editorState) setEditorState(__editorState)
  }

  const deleteTab = () => {
    if (
      window.confirm(
        'Are you sure you want to delete this tab? This action cannot be undone.'
      )
    ) {
      props.deleteTab(props.tab.id)
      props.back()
    }
  }

  return (
    <Wrapper>
      <Button style={{ display: 'block' }} onClick={back}>
        Back
      </Button>
      <Input
        value={name}
        placeholder="Tab name"
        onChange={e => setName(e.target.value)}
      />
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorStyle={{
          border: '1px solid #f1f1ff',
          padding: '0 1rem',
          height: '10rem',
          overflow: 'auto',
        }}
      />
      <EditorButtons
        isModified={state === 'modified'}
        save={saveTab}
        reset={resetTab}
        delete={deleteTab}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;

  & > * {
    margin: 1rem;
  }
`

const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.3em 0.8em;
`

function getEditorStateFromContent(content) {
  const contentBlock = htmlToDraft(content)
  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    )
    const editorState = EditorState.createWithContent(contentState)
    return editorState
  } else {
    return null
  }
}

function getContentFromEditorState(editorState) {
  const raw = convertToRaw(editorState.getCurrentContent())
  const content = draftToHtml(raw).replace(/[\r\n]$/, '')

  return content === '<p></p>' ? '' : content
}

export default TabEditor
