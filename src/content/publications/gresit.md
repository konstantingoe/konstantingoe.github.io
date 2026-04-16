---
title: "Nonlinear Causal Discovery for Grouped Data"
date: 2025-06-05
venue: "UAI'25"
paperurl: "https://openreview.net/forum?id=bLIm44sGQe"
citation: "Göbler, K., Windisch, T., and Drton, M. (2025). Nonlinear causal discovery for grouped data. In The 41st Conference on Uncertainty in Artificial Intelligence."
excerpt: "Inferring cause-effect relationships from observational data has gained significant attention in recent years, but most methods are limited to scalar random variables."
---

Inferring cause-effect relationships from observational data has gained significant attention in recent years, but most methods are limited to scalar random variables. In many important domains, including neuroscience, psychology, social science, and industrial manufacturing, the causal units of interest are groups of variables rather than individual scalar measurements.

Motivated by these applications, we extend nonlinear additive noise models to handle random vectors, establishing a two-step approach for causal graph learning:

1. **Infer the causal order** among random vectors
2. **Perform model selection** to identify the best graph consistent with this order

We introduce effective and novel solutions for both steps in the vector case, demonstrating strong performance in simulations. Finally, we apply our method to real-world assembly line data with partial knowledge of causal ordering among variable groups.
