#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use perfcnt::linux::{HardwareEventType, PerfCounterBuilderLinux};
use perfcnt::{AbstractPerfCounter, PerfCounter};

#[tauri::command]
fn test_invocation() {
    println!("Test invocation successful")
}

#[tauri::command]
fn use_perf_counter() {}
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, test_invocation])
        .run(tauri::generate_context!())
        .expect("Expect error thrown at tauri::Builder::run");
}
