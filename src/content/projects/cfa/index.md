---
title: CFA - Calisthenic Form Analyzer
description: A full-stack app that analyzes calisthenics form from video using pose detection and generates AI-powered coaching feedback.
tech: [Python, FastAPI, React, TypeScript, MediaPipe, OpenCV]
github: https://github.com/KennethOng02/cfa
featured: true
---

## Background

CFA (Calisthenic Form Analyzer) evaluates calisthenics exercise form — planche, front lever, back lever, handstand — from a short uploaded video.

## How it works

- Extracts frames at 2 FPS and runs MediaPipe pose detection over each frame
- Computes geometric metrics (joint angles, alignment, lean) against calibration models per movement
- Sends the computed metrics to an LLM (configurable: Claude, OpenAI, or Gemini) to generate personalized coaching feedback
- Visualizes results with skeleton overlays and score trend charts

## Tech stack

- **Backend:** FastAPI, SQLAlchemy, MediaPipe, OpenCV, NumPy
- **Frontend:** React, TypeScript, Recharts
- **Storage:** SQLite

The metric configuration is designed to be extensible, so new movements can be added without touching the core analysis pipeline.

<!-- TODO: 補充截圖/展示影片、Demo 連結、開發動機與心得 -->
