
fixture(`sample api test`)
test("test1", async (t) => {
    const response = await t.request(`https://reqres.in/api/users/2`);
    console.log(response.status);
    console.log(response);
  });