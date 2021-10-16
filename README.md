# Errors stack

> Error extends javascript

## Usage

Custom errors throw, the errors look like this

![Captura de tela de 2021-10-09 17-16-45](https://user-images.githubusercontent.com/59159025/136672778-416d223e-42fd-4f19-95b0-9838bc05a6db.png)

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
