import { test, expect } from "@playwright/test";
import { CreateUser } from "../model/createUser";
import { CommonMethods } from "../utilities/commonMethods";

test("Verify update user request using put", async ({ request }) => {

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
    const _putResponse =  await request.put("users/" + postJsonData.id, {   
    data: {
          "name": "Test User",
          "email": emailId,
          "gender": "female",
          "status": "active"
       }
    });
 
    let putJsonData = await _putResponse.json();
    console.log("Put Response: " + JSON.stringify(putJsonData));
    expect(putJsonData.name).toBe("Test User");
    expect(putJsonData.email).toBe(body.email);
    expect(putJsonData.gender).toBe("female");
    expect(putJsonData.status).toBe("active");
    
 });