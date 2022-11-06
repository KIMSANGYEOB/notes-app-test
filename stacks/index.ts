import * as sst from "@serverless-stack/resources";
import ApiStack from "./ApiStack";
import StorageStack from "./StorageStack";
import AuthStack from "./AuthStack";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  const storageStack = new StorageStack(app, "storage-sykim");

  const apiStack = new ApiStack(app, 'api-sykim', {
    table: storageStack.table
  });

  new AuthStack(app, "auth", {
    api: apiStack.api,
    bucket: storageStack.bucket,
  });

  // Add more stacks
}
