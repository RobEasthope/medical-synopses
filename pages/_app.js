import * as React from 'react';
import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { cache } from 'emotion';

import { theme } from '../styles/theme';
import { globalStyles } from '../styles/globalStyles';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          {globalStyles}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    );
  }
}
