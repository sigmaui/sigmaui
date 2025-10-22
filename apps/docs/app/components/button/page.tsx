import React from 'react';
import Button from '@sigma-ui-kit/button';

export default function ButtonPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Button Component</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-6">
          A button means an operation (or a series of operations). Clicking a button will trigger
          its corresponding business logic.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">Basic Usage</div>

          <div className="p-6 bg-gray-50">
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
              </div>
            </div>
          </div>

          <details className="border-t border-gray-200">
            <summary className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 cursor-pointer">
              Show Code
            </summary>
            <pre className="p-4 bg-black text-white text-sm overflow-x-auto">
              <code>{`import Button from '@sigma-ui-kit/button';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}`}</code>
            </pre>
          </details>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-6">Different button sizes for various use cases.</p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">Button Sizes</div>

          <div className="p-6 bg-gray-50">
            <div className="flex gap-4 items-center">
              <Button size="smaller">Small</Button>
              <Button size="small">Medium</Button>
              <Button size="standard">Medium</Button>
            </div>
          </div>

          <details className="border-t border-gray-200">
            <summary className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 cursor-pointer">
              Show Code
            </summary>
            <pre className="p-4 bg-black text-white text-sm overflow-x-auto">
              <code>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}</code>
            </pre>
          </details>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <p className="text-gray-600 mb-6">Button states including loading and disabled.</p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">Button States</div>

          <div className="p-6 bg-gray-50">
            <div className="flex gap-4 items-center">
              <Button>Normal</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          <details className="border-t border-gray-200">
            <summary className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 cursor-pointer">
              Show Code
            </summary>
            <pre className="p-4 bg-black text-white text-sm overflow-x-auto">
              <code>{`<Button>Normal</Button>
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`}</code>
            </pre>
          </details>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">
                  Property
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">
                  Default
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">variant</td>
                <td className="px-4 py-3 text-sm text-gray-700">Button variant</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">
                  primary | secondary | outline | ghost
                </td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">primary</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">size</td>
                <td className="px-4 py-3 text-sm text-gray-700">Button size</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">sm | md | lg</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">md</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td className="px-4 py-3 text-sm text-gray-700">Disable button</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">false</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">loading</td>
                <td className="px-4 py-3 text-sm text-gray-700">Show loading spinner</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
