import puppeteer from 'puppeteer';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

export interface User {
  email: string;
  password: string;
}

async function Login() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://www.nike.com/fr/', {
    waitUntil: 'networkidle2',
  });

  await page.screenshot({ path: 'hey.png' });

  await page.click(
    '#gen-nav-commerce-header-v2 > div.pre-modal-window.is-active > div > div:nth-child(3) > div > div.mt5-sm.mb5-sm.mt2-md.mb7-md > div:nth-child(1) > div:nth-child(1) > button',
  );

  const clicked = async () => {
    await page.click(
      '#cfb8d42b-83b5-4faf-befd-5e599a35d0e0 > div > div > section > ul > li.slide.item-0.in-view.first > div > a > div._2FZZ6KYm',
    );
  };
  page
    .waitForSelector(
      '#cfb8d42b-83b5-4faf-befd-5e599a35d0e0 > div > div > section > ul > li.slide.item-0.in-view.first > div > a > div._2FZZ6KYm',
    )
    .then(() => clicked());
  console.log('finish');
}

Login();
console.log('running');
