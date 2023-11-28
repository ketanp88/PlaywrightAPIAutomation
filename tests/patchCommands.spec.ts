import { CreateUser } from "../model/createUser";
import { CommonMethods } from "../utilities/commonMethods";
import { test, expect } from "@playwright/test";

test("Verify update user request using patch", async ({ request }) => {

    let emailId = CommonMethods.generateRandomString(5) + CommonMethods.generateRandomNumber(4) + "@test.com";

    let body: CreateUser = {
      name: "Test User",
      email: emailId,
      gender: "male",
      status: "active",
    };
  
    const _postResponse = await request.post("users", {
      data: body,
    });

    let postJsonData = await _postResponse.json();
    const _patchResponse =  await request.put("users/" + postJsonData.id, {   
    data: {
          "gender": "female",
       }
    });
 
    let patchJsonData = await _patchResponse.json();
    console.log("Patch Response: " + JSON.stringify(patchJsonData));
    expect(patchJsonData.gender).toBe("female");
 });
