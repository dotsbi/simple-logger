# simple-logger

Simple javascript color coded logger written in typescript also browser compatible.

### Installing

```
npm install simple-logger
```

### Usage

simple-logger exposes multiple levels of logging

```js
logger = require('simple-logger');
logger.fatal('fatal');
logger.error('error');
logger.warn('warn');
logger.info('info');
logger.debug('debug');
logger.trace('trace');
```

<img src="/docs/example.png"/>

Using the LOG_LEVEL environment variable logging for certain log levels can be suppress.

```
LOG_LEVEL=ALL node <script>
LOG_LEVEL=FATAL node <script>
LOG_LEVEL=ERROR node <script>
LOG_LEVEL=WARN node <script>
LOG_LEVEL=INFO node <script>
LOG_LEVEL=DEBUG node <script>
LOG_LEVEL=TRACE node <script>
LOG_LEVEL=OFF node <script>
```

## Running the tests

```
yarn test
```
