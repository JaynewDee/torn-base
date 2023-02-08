#!/bin/bash

cd "./client" && npm run dev && cd "../src-tauri/" & cargo tauri dev
