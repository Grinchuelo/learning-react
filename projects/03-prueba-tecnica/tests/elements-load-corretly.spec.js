import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173'
const imageURL_startsWith = 'https://cataas.com/cat/says/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('heading', { level: 3 })
  const span = await page.getByTestId('firstThreeWords')
  const image = await page.getByRole('img')
  await expect(span).toBeVisible()
  await expect(image).toBeVisible()

  const textContent = await text.textContent
  const spanText = await span.textContent()
  const firstThreeWords = await spanText.split(' ')
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(firstThreeWords?.length).toBe(3)
  await expect(imageSrc?.startsWith(imageURL_startsWith)).toBeTruthy()
});

test('image changes when button is clicked', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  
  const image = await page.getByRole("img")
  await expect(image).toBeVisible()
  const prevImageSrc = image.getAttribute("src")

  const button = await page.getByRole("button")
  await button.click()

  const newImageSrc = image.getAttribute("src")
  const newImageIsDifferent = prevImageSrc != newImageSrc

  await expect(newImageIsDifferent).toBeTruthy()
});
