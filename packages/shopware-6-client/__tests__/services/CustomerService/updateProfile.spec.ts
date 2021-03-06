import { name, random } from "faker";
import { apiService } from "../../../src/apiService";
import { updateProfile, update, config } from "@shopware-pwa/shopware-6-client";
import { getCustomerDetailsUpdateEndpoint } from "../../../src/endpoints";

const customerData = {
  salutationId: random.uuid(),
  firstName: name.firstName(),
  lastName: name.lastName(),
  title: "d",
};

jest.mock("../../../src/apiService");
const mockedAxios = apiService as jest.Mocked<typeof apiService>;

describe("CustomerService - updateProfile", () => {
  let contextToken: string;
  beforeEach(() => {
    jest.resetAllMocks();
    contextToken = random.uuid();
    update({ contextToken });
  });
  afterEach(() => {
    expect(config.contextToken).toEqual(contextToken);
  });

  it("returns no data if successfully updated", async () => {
    mockedAxios.post.mockResolvedValueOnce(null);
    const result = await updateProfile(customerData);

    expect(result).toBeFalsy();
    expect(mockedAxios.post).toBeCalledTimes(1);
    expect(mockedAxios.post).toBeCalledWith(
      getCustomerDetailsUpdateEndpoint(),
      customerData
    );
  });
});
