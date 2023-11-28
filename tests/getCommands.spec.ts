import { test, expect } from '@playwright/test';

test("Verify get request for users data", async ({request}) => {
    const _response =  await request.get("users")
    let jsonData = await _response.json();
    console.log(jsonData);
    expect(_response.ok()).toBeTruthy();
 });
 