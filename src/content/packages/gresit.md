---
title: "GRESIT"
description: "Nonlinear causal discovery for grouped data using additive noise models, deep learning, and sparse multitask learning"
date: 2025-06-05
languages: ["Python"]
repository: "https://github.com/boschresearch/gresit"
documentation: "https://github.com/boschresearch/gresit"
status: "active"
featured: true
---

**GRESIT** implements methods for causal discovery when the units of interest are groups of variables rather than individual scalar measurements. This is particularly useful in domains like neuroscience, psychology, social science, and industrial manufacturing.

## Key Features

- Extends nonlinear additive noise models to random vectors
- Two-step approach: causal order inference + model selection
- Handles grouped variable structures
- Strong performance on simulated and real data
- Application to real-world assembly line data

## Methodology

1. **Causal Order Inference** - Establish ordering among variable groups
2. **Model Selection** - Identify best graph consistent with inferred order
3. **Validation** - Tested on both simulation and real manufacturing data

## Applications

- Neuroscience: analyzing brain region interactions
- Industrial processes: assembly line causal relationships
- Psychology: group-level variable dependencies
- Social networks: community-level effects

## Citation

Göbler, K., Windisch, T., and Drton, M. (2025). Nonlinear causal discovery for grouped data. *In The 41st Conference on Uncertainty in Artificial Intelligence (UAI)*.
