---
title: "HUME"
description: "High-dimensional Undirected Graphical Models for Arbitrary Mixed data - learn sparse graphical structures from complex multivariate data."
date: 2024-05-15
languages: ["R"]
repository: "https://github.com/konstantingoe/hume"
documentation: "https://github.com/konstantingoe/hume"
status: "maintained"
featured: false
---

**HUME** (High-dimensional Undirected Graphical Models for arbitrary Mixed data) is an R package for learning sparse graphical models from high-dimensional data with mixed variable types.

## Overview

Graphical models are fundamental tools for understanding relationships between variables in multivariate data. While methods for homogeneous data (all continuous or all discrete) are well-developed, principled approaches for mixed data types remain challenging.

## Capabilities

- Learn conditional independence structure from mixed-type data
- High-dimensional support for many variables
- Sparsity-inducing estimation methods
- Flexible handling of heterogeneous variable types
- Robust statistical guarantees

## Use Cases

- Identifying meaningful relationships in complex datasets
- Feature selection and variable importance
- Network discovery in multimodal data
- Exploratory data analysis with mixed measurements

## Installation

```r
# From GitHub
devtools::install_github("konstantingoe/hume")
```

## Citation

Göbler, K., Drton, M., Mukherjee, S., & Miloschewski, A. (2024). High-dimensional undirected graphical models for arbitrary mixed data. *Electronic Journal of Statistics*, 18(1), 2339-2404.
