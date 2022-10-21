import * as sst from "@serverless-stack/resources";
import ApiStack from "./ApiStack";
import StorageStack from "./StorageStack";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  const storageStact = new StorageStack(app, "storage-sykim");

  new ApiStack(app, 'api-sykim', {
    table: storageStact.table
  });
  // Add more stacks
}
