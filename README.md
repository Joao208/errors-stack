# Errors stack

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Joao208_errors-stack&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Joao208_errors-stack)
[![codecov](https://codecov.io/gh/Joao208/errors-stack/branch/main/graph/badge.svg?token=GXOKX31Y8J)](https://codecov.io/gh/Joao208/errors-stack)


A JavaScript error library to make easier, faster and practical the stack of errors.
## Usage

## BodyPropertyError

Throw this error if it is a body property error.

```js
import { BodyPropertyError } from "errors-stack";

throw new BodyPropertyError("message");
```

## ForbiddenError

Throw this error if it is a forbidden error.

```js
import { ForbiddenError } from "errors-stack";

throw new ForbiddenError("message");
```

## HealthError

Throw this error if it is a health error.

```js
import { HealthError } from "errors-stack";

throw new HealthError("message");
```

## InternalServiceError

Throw this error if it is a internal server error.

```js
import { InternalServiceError } from "errors-stack";

throw new InternalServiceError("message");
```

## NotFoundError

Throw this error if it is a not found error.

```js
import { NotFoundError } from "errors-stack";

throw new NotFoundError("message");
```

## ParamPropertyError

Throw this error if it is a param error.

```js
import { ParamPropertyError } from "errors-stack";

throw new ParamPropertyError("message");
```

## QueryPropertyError

Throw this error if it is a query error.

```js
import { QueryPropertyError } from "errors-stack";

throw new QueryPropertyError("message");
```

## TooManyRequestsError

Throw this error if has many requests.

```js
import { TooManyRequestsError } from "errors-stack";

throw new TooManyRequestsError("message");
```

## UnauthorizedError

Throw this error if has unauthorized situation.

```js
import { UnauthorizedError } from "errors-stack";

throw new UnauthorizedError({ message: "message", status: 401 });
```

## UnknownError

Throw this error if error is unknown.

```js
import { UnknownError } from "errors-stack";

throw new UnknownError({ message: "message", status: 401 });
```

## ValidationError

Throw this error if is an validation error, and array is necessary to throw this error.

```js
import { ValidationError } from "errors-stack";

throw new ValidationError({
  message: "message",
  validations: [new BodyPropertyError("message")],
});
```

## License

errors-stack is freely distributable under the terms of MIT License.
