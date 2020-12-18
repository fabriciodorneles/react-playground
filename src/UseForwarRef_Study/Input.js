import React, { forwardRef } from 'react';

const Input = (props, ref) => <input ref={ref} type="text" />;

export default forwardRef(Input);
