import React from 'react';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footers';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home(){
  console.log("HOME Page");
  return (
    <>
    <JumbotronContainer />
      <FaqsContainer />
    <FooterContainer />
    </>
  );
};
