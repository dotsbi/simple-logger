# slim-logger

A fully featured is a javascript logger with no dependencies.

Features

* Browser compatible
* Color coding per log level
* Typescript declarations
* zero dependencies

### Installing

```
npm install slim-logger
```

### Usage

slim-logger exposes multiple levels of logging

```js
logger = require('slim-logger');
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

Log level can also be set in code

```
logger = require('slim-logger');
logger.setLogLevel('INFO')
```

## Running the tests

```
yarn test
```
