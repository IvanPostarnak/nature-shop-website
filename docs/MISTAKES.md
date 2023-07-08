# Mistakes

This file contains conclusions and main points of self-reflection. I decided to sum up some thoughts during developing process.

----

1. TESTS: I highly doubt we need 2 test cases .toBeInTheDocument() and .toBeVisible() at the same time. If something is visible - it's in DOM... So, there is at least 60+ needless tests cases. The main point of it: "do not check the same thing twice+ times using different methods"