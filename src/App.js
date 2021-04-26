import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from 'apollo-client';
import { routes } from 'utils/routing';
import { reactQueryClient } from 'utils/react-query-client'
import { QueryClientProvider } from 'react-query'

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only on first page load.
 **/
export const trackInitialLoad = () => {
  console.log('First page load');
};

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only once the page has completely
 * loaded.
 **/
export const trackPageCompletedLoading = () => {
  console.log('Page done loading');
};

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={reactQueryClient}>
        <HashRouter>
          <Switch>
            {
              routes.map(({ path, breadcrums, component: Component }, idx) => {
                return (
                  <Route
                    exact
                    path={path}
                    key={idx}
                    render={(props) => {
                      return <Component />
                    }}
                  />
                )
              })
            }
          </Switch>
        </HashRouter>
      </QueryClientProvider>
    </ApolloProvider>
  );
};