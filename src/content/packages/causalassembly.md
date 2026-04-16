---
title: "causalAssembly"
description: "Semisynthetic data generator for benchmarking causal discovery algorithms with realistic production data and known ground truth causal relationships."
date: 2024-04-01
languages: ["Python"]
repository: "https://github.com/boschresearch/causalAssembly"
documentation: "https://github.com/boschresearch/causalAssembly"
status: "maintained"
featured: true
---

**causalAssembly** is a Python tool designed to facilitate benchmarking of causal discovery methods. It generates semisynthetic data based on real-world manufacturing assembly line measurements with established ground truth causal relationships.

## Key Features

- Generates benchmark datasets with known causal structures
- Based on real production data from assembly lines
- Uses distributional random forests for privacy-preserving data generation
- Validates causal discovery algorithms reliably
- Markovian guarantee with respect to ground truth

## Use Cases

- Benchmarking causal discovery algorithms
- Validating new causality inference methods
- Testing robustness of structure learning approaches
- Privacy-preserving data generation for research

## Citation

If you use causalAssembly in your research, please cite:

Göbler, K., Windisch, T., Drton, M., Pychynski, T., Roth, M. & Sonntag, S. (2024). causalAssembly: Generating Realistic Production Data for Benchmarking Causal Discovery. *Proceedings of Machine Learning Research*, 236, 609-642.
