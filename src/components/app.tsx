import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import TabSelector from './tab-selector'
import TabEditor from './tab-editor'
import defaultTabs from '../static/tabs.json'
import DefaultButton from './button'
import CodeModal from './code-modal'
import { v4 as uuid } from 'uuid'
import draftToHtml from 'draftjs-to-html'
import {
  ContentState,
  EditorState,
  convertToRaw,
  convertFromHTML,
} from 'draft-js'
import { Tab, InputConfig } from '../types'
import Form from './form'
import FormField from './form-field'
import fields from '../static/fields.json'

const App = () => {
  const [tabs, setTabs] = useState<Tab[]>(
    defaultTabs.map(tab => ({
      id: uuid(),
      name: tab.name,
      content: importRawHtml(tab.content),
    }))
  )
  const [activeTab, setActiveTab] = useState<Tab | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [html, setHtml] = useState<string>('')
  const [modalShown, setModalShown] = useState<boolean>(false)

  useEffect(() => {
    if (activeIndex === 0) setTimeout(() => setActiveTab(null), 200)
  }, [activeIndex])

  const handleTabSelect = (id: string) => {
    const selectedTab = tabs.find(tab => tab.id === id)
    if (!selectedTab) return

    setActiveTab(selectedTab)
    setActiveIndex(1)
  }

  const handleTabCreate = () => {
    const newTab: Tab = {
      id: uuid(),
      name: 'New Tab',
      content: '',
    }

    setTabs([...tabs, newTab])
    setActiveTab(newTab)
    setActiveIndex(1)
  }

  const handleHomeSelect = () => setActiveIndex(0)

  const generateHtml = () => {
    setHtml(getHtmlFromTabData(tabs))
    setModalShown(true)
  }

  const updateTab = (tab: Tab) => {
    const __tabs = [...tabs]
    const index = __tabs.findIndex(originalTab => tab.id === originalTab.id)

    if (index !== null) {
      __tabs.splice(index, 1, tab)
      setTabs(__tabs)
    }
  }

  const deleteTab = (id: string) => {
    const __tabs = [...tabs]
    const index = __tabs.findIndex(tab => tab.id === id)
    __tabs.splice(index, 1)

    setTabs(__tabs)
  }

  const dismissModal = () => setModalShown(false)

  const handleSubmit = useCallback(state => {
    console.log(state)
  }, [])

  return (
    <Wrapper>
      <Viewport>
        <Container activeIndex={activeIndex}>
          <Frame>
            <TabSelector
              tabs={tabs}
              select={handleTabSelect}
              create={handleTabCreate}
            />
            <Form onSubmit={handleSubmit}>
              {(fields as InputConfig[]).map(field => {
                return <FormField key={field.label} {...field} />
              })}
              <Button type="submit">Generate HTML</Button>
            </Form>
          </Frame>
          <Frame>
            {activeTab && (
              <TabEditor
                tab={activeTab}
                updateTab={updateTab}
                deleteTab={deleteTab}
                back={handleHomeSelect}
              />
            )}
          </Frame>
        </Container>
      </Viewport>
      {modalShown && <CodeModal dismiss={dismissModal}>{html}</CodeModal>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background: white;
  box-shadow: 0 3px 4px #ccc;
  margin-top: 5rem;
`
const Viewport = styled.div`
  width: 100%;
  overflow-x: hidden;
`

const Container = styled.div<{
  activeIndex: number
}>`
  display: grid;
  grid-template-columns: repeat(
    ${props => (props.children instanceof Array ? props.children.length : 1)},
    1fr
  );
  width: calc(
    100% *
      ${props => (props.children instanceof Array ? props.children.length : 1)}
  );
  transform: translateX(
    calc(
      -100% * ${props => (props.activeIndex || 0) / (props.children instanceof Array ? props.children.length : 1)}
    )
  );
  transition: transform 0.2s ease-in-out;
`

const Frame = styled.div`
  width: 100%;
`

const Button = styled(DefaultButton)`
  font-size: 1rem;
  color: white;
  background: #001659;
  margin-top: 3rem;
`

function importRawHtml(html: string) {
  const contentBlock = convertFromHTML(html)
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  )
  const editorState = EditorState.createWithContent(contentState)
  const raw = convertToRaw(editorState.getCurrentContent())
  const content = draftToHtml(raw).replace(/[\r\n]$/, '')

  return content === '<p></p>' ? '' : content
}

function getHtmlFromTabData(tabs: Tab[]) {
  const style = `<style>
    #bam-tab-wrapper {
      position: relative;
      width: 100%;
      max-width: 768px;
      margin: auto;
      display: flex;
      font-family: Helvetica, Arial, sans-serif;
      box-sizing: border-box;
    }
    
    #bam-tab-wrapper .tab input {
      display: none;
    }
    
    #bam-tab-wrapper .tab label {
      display: block;
      padding: 0.5em 1.5em;
    }
    
    #bam-tab-wrapper .tab input:checked + label {
      font-weight: bold;
    }
    
    #bam-tab-wrapper .tab-content {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #ccc;
      padding: 2rem;
      width: 100%;
      display: none;
    }
    
    #bam-tab-wrapper .tab input:checked ~ .tab-content {
      display: block;
    }

    #bam-header-img {
      max-width: 100%;
    } 
  </style>`

  const html = `<div id="bam-tab-wrapper">
    ${tabs
      .map(
        (tab, i) =>
          `<div class="tab">
        <input type="radio" id="${tab.id}" name="active-tab" ${
            i === 0 ? 'checked ' : ''
          }/>
        <label for="${tab.id}" tabindex="0">${tab.name}</label>
        <div class="tab-content">
          ${
            i === 0
              ? `<img
                  id='bam-header-img'
                  src='https://i.frg.im/EgARwcjM/ebay-listing-banner.jpg'
                  alt='Blues Angel Music - New, Used, Vintage'
                />`
              : ''
          }
          ${tab.content}
        </div>
      </div>`
      )
      .join('')}
  </div>`

  return `${style}${html}`
}

export default App