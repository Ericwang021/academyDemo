import Head from 'next/head';
import React, { Fragment, useState, useMemo, useRef } from 'react';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ClassITitleWrapper from '../components/ClassITitleWrapper/ClassITitleWrapper';
import HeaderRoom from 'react-headroom';
const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <CssBaseline />
      <HeaderRoom>
        <Header />
      </HeaderRoom>
      <div className={styles.container}>
        <ClassITitleWrapper title={'Learn with Academy - Academy Tutorial'} />
        <Container maxWidth={false} className={styles.containerBackground}>
          <main>{props.children}</main>
        </Container>
      </div>
    </Fragment>
  );
};

export default Layout;
