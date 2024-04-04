# k6-project

Goal of this project is to house a performance testing suite.

# Tech Stack
- k6

# Structure
-K6
    - tests
        - samples
            - (houses examples of performance testing)
        - actual-tests.js
    - utils
        - (houses assertions and environment classes for abstraction and reusability)

# Required 
You'll need K6 installed locally. 
https://k6.io/docs/get-started/installation/

You can then test it by running `k6` in a command terminal.
If you face `k6 is not a recongised command` after installation/in VS code, you'll need to restart your laptop/pc.




# Creating custom metrics

4 Steps:
1 - Import the Metric you want e.g. `import {Counter} from 'k6/metrics';`
2 - create the metric e.g. `let myCounter = new Counter('my_counter');`
3 - use it e.g. `myCounter.add(1)`
4 - track it in a threshold e.g. `my_counter: ['count > 10']`

