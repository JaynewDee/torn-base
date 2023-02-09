import { invoke } from "@tauri-apps/api/tauri";

export const ACTIONS = {
  test: () => invoke("test_invocation")
};
