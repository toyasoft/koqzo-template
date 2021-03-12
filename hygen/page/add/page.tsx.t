---
to: src/pages/<%= dir %>/<%= name %>.tsx
unless_exists: true
---
import { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { initEnvironment } from '../../lib/relay'
import { PageContext } from '../../../lib/context'
import { QueryRenderer } from 'react-relay'
import <%= dir.charAt(0).toUpperCase() %><%= dir.slice(1) %><%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Page_<%= dir %><%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Query from '../../queries/<%= dir %>/<%= dir.charAt(0).toUpperCase() %><%= dir.slice(1) %><%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Page'
import Layout from '../../components/templates/Layout'
import HtmlHead from '../../components/templates/HtmlHead'
import Menu from '../../components/templates/Menu'
import Authorized from '../../components/templates/Authorized'
import Main from '../../components/templates/Main'
import Content from '../../components/templates/Content'
import ContentHeader from '../../components/templates/ContentHeader'
import ContentWrapper from '../../components/templates/ContentWrapper'



const <%= dir.charAt(0).toUpperCase() %><%= dir.slice(1) %><%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Page: NextPage = () => {

  const environment = initEnvironment({})

  const pageContext = useContext(PageContext)

  useEffect(() => {
    pageContext.setPage('order')
  }, [])

  return (
    <>
      <HtmlHead
        title="モノノベ"
        description=""
        url="https://mononobe.com"
      />
      
      <QueryRenderer
        environment={environment}
        query={<%= dir.charAt(0).toUpperCase() %><%= dir.slice(1) %><%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Page_<%= dir %><%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Query}
        render={({ error, props }) => {
          if (props) {
            return (
              <Authorized query={props}>
                <Layout query={props}>
                  <Content>
                    <Menu />
                    <Main>
                      <ContentHeader title="" />
                      <ContentWrapper>

                      </ContentWrapper>
                      
                    </Main>
                  </Content>
                  
                </Layout>
              </Authorized>
            )
          }
        }}
      />
    </>
  )
}

export default <%= dir.charAt(0).toUpperCase() %><%= dir.slice(1) %><%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Page