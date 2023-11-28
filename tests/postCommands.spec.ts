import { CreateUser } from "../model/createUser";
import { CommonMethods } from "../utilities/commonMethods";
import { test, expect } from "@playwright/test";

test("Verify create User request using post", async ({ request }) => {

  let emailId = CommonMethods.generateRandomString(5) + CommonMethods.generateRandomNumber(4) + "@test.com";

  let body: CreateUser = {
    name: "Test User",
    email: emailId,
    gender: "male",
    status: "active",
  };

  const _response = await request.post("users", {
    data: body,
  });

  console.log("Response Code: " + _response.status());
  let jsonData = await _response.json();
  console.log("Response: " + JSON.stringify(jsonData));
  expect(jsonData.name).toBe(body.name);
  expect(jsonData.email).toBe(body.email);
  expect(jsonData.gender).toBe(body.gender);
  expect(jsonData.status).toBe(body.status);
  expect(_response.status()).toBe(201);
  expect(_response.ok()).toBeTruthy();
});


