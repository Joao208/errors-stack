# models-sequelize

> Sequelize configuration library

## Usage

Custom errors throw

## BodyPropertyError

```js
import { BodyPropertyError } from "errors-stack";

throw new BodyPropertyError("message");
```

## ForbiddenError

```js
import { ForbiddenError } from "errors-stack";

throw new ForbiddenError("message");
```

## HealthError

```js
import { HealthError } from "errors-stack";

throw new HealthError("message");
```

## InternalServiceError

```js
import { InternalServiceError } from "errors-stack";

throw new InternalServiceError("message");
```

## NotFoundError

```js
import { NotFoundError } from "errors-stack";

throw new NotFoundError("message");
```

## ParamPropertyError

```js
import { ParamPropertyError } from "errors-stack";

throw new ParamPropertyError("message");
```

## QueryPropertyError

```js
import { QueryPropertyError } from "errors-stack";

throw new QueryPropertyError("message");
```

## TooManyRequestsError

```js
import { TooManyRequestsError } from "errors-stack";

throw new TooManyRequestsError("message");
```

## UnauthorizedError

```js
import { UnauthorizedError } from "errors-stack";

throw new UnauthorizedError({ message: "message", status: 401 });
```

## UnknownError

```js
import { UnknownError } from "errors-stack";

throw new UnknownError({ message: "message", status: 401 });
```

## ValidationError

```js
import { ValidationError } from "errors-stack";

throw new ValidationError("message", [new BodyPropertyError("message")]);
```
