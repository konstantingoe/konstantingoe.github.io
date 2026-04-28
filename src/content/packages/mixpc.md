---
title: "mixpc"
description: "mixpc: Mixed PC Algorithm for Causal Discovery"
date: 2026-04-28
languages: ["Python"]
repository: "https://github.com/konstantingoe/mixed-pc"
documentation: "https://konstantingoe.github.io/mixed-pc/"
status: "active"
featured: false
---

**mixpc** is a Python library for learning causal graphical models from data with mixed variable types (continuous and ordinal). It implements the PC algorithm with the PC-stable skeleton discovery variant (Colombo & Maathuis, 2014) and three v-structure orientation strategies from Ramsey et al. (2016).

## Key Features

- PC-stable skeleton discovery with deterministic, order-independent edge removal
- Three v-structure orientation strategies: conservative, majority, and PC-Max
- Automatic dispatch to the appropriate correlation measure per variable pair
- Prior knowledge support: required/forbidden edges and directions, partial temporal layering
- Full Meek rule application (R1–R4) for maximal orientation of remaining edges

## Supported Data Types

- Continuous–continuous: nonparanormal Spearman sin-transform (Liu et al., 2009)
- Ordinal–ordinal: polychoric MLE (Brent or Newton-Fisher solver)
- Mixed continuous–ordinal: ad-hoc polyserial correlation

## Methods

The package combines order-independent skeleton discovery with conservative, majority, and PC-Max v-structure orientation rules, integrating optional prior knowledge — including partial temporal layering — across all three PC phases. Mixed data are handled through a latent Gaussian copula view, with pairwise correlations chosen automatically based on variable types.

## Citation

Göbler, K. (2026). *mixpc: Mixed PC Algorithm for Causal Discovery* (Version 0.1.1) [Computer software]. https://github.com/konstantingoe/mixed-pc
