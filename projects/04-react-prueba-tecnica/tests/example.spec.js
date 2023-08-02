// @ts-check
import { test, expect } from '@playwright/test'
// import { CAT_PREFIX_IMAGE_URL } from '../src/utils/constants'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})

test('get new random fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  console.log({ textContent, imageSrc })

  const button = await page.getByRole('button')
  await button.click()

  await page.waitForTimeout(3000)

  const newText = await page.getByRole('paragraph')
  const newImage = await page.getByRole('img')

  const newTextContent = await newText.textContent()
  const newImageSrc = await newImage.getAttribute('src')
  console.log({ newTextContent, newImageSrc })

  await expect(textContent).not.toBe(newTextContent)
  await expect(imageSrc).not.toBe(newImageSrc)
})
