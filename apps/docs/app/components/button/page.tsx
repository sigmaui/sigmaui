import React from 'react';
import Button from '@sigma-ui-kit/button';

type VariantKeys = 'primary' | 'secondary' | 'tertiary';
const variantList: VariantKeys[] = ['primary', 'secondary', 'tertiary'];
type ToneKeys = 'brand' | 'neutral' | 'success' | 'error' | 'warning' | 'info';
const toneList: ToneKeys[] = ['brand', 'neutral', 'success', 'error', 'warning', 'info'];

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
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="text-gray-600 mb-6">All button variants.</p>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">Button Variants</div>
          <div className="p-6 bg-gray-50">
            <div className="flex gap-4 flex-wrap items-center">
              {variantList.map(variant => (
                <Button key={variant} variant={variant}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tones</h2>
        <p className="text-gray-600 mb-6">All tone options for each button variant.</p>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">Button Tones</div>
          <div className="p-6 bg-gray-50 flex flex-col gap-3">
            {variantList.map(variant => (
              <div key={variant}>
                <div className="mb-1 font-medium text-sm text-gray-900">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </div>
                <div className="flex gap-4 items-center flex-wrap">
                  {toneList.map(tone => (
                    <Button key={tone} variant={variant} tone={tone}>
                      {tone.charAt(0).toUpperCase() + tone.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variant × Tone</h2>
        <p className="text-gray-600 mb-6">Kết hợp đầy đủ giữa variant và tone.</p>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">
            Button Variant × Tone
          </div>
          <div className="p-6 bg-gray-50 flex flex-col gap-3">
            {variantList.map(variant => (
              <div key={variant}>
                <div className="mb-1 font-medium text-sm text-gray-900">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </div>
                <div className="flex gap-4 items-center flex-wrap">
                  {toneList.map(tone => (
                    <Button key={`${variant}-${tone}`} variant={variant} tone={tone}>
                      {tone.charAt(0).toUpperCase() + tone.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-6">All button sizes for all variants.</p>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">Button Sizes</div>
          <div className="p-6 bg-gray-50 flex flex-col gap-3">
            {variantList.map(variant => (
              <div key={variant}>
                <div className="mb-1 font-medium text-sm text-gray-900">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </div>
                <div className="flex gap-4 items-center">
                  <Button variant={variant} size="smaller">
                    Smaller
                  </Button>
                  <Button variant={variant} size="small">
                    Small
                  </Button>
                  <Button variant={variant} size="medium">
                    Medium
                  </Button>
                  <Button variant={variant} size="standard">
                    Standard
                  </Button>
                  <Button variant={variant} size="big">
                    Big
                  </Button>
                  <Button variant={variant} size="bigger">
                    Bigger
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Loading States</h2>
        <p className="text-gray-600 mb-6">Loading state cho từng variant và size.</p>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">Button Loading</div>
          <div className="p-6 bg-gray-50 flex flex-col gap-3">
            {variantList.map(variant => (
              <div key={variant}>
                <div className="mb-1 font-medium text-sm text-gray-900">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </div>
                <div className="flex gap-4 items-center">
                  <Button variant={variant} size="smaller" loading>
                    Smaller
                  </Button>
                  <Button variant={variant} size="small" loading>
                    Small
                  </Button>
                  <Button variant={variant} size="medium" loading>
                    Medium
                  </Button>
                  <Button variant={variant} size="standard" loading>
                    Standard
                  </Button>
                  <Button variant={variant} size="big" loading>
                    Big
                  </Button>
                  <Button variant={variant} size="bigger" loading>
                    Bigger
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Disabled States</h2>
        <p className="text-gray-600 mb-6">Disabled state cho từng variant và size.</p>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b text-sm font-medium">Button Disabled</div>
          <div className="p-6 bg-gray-50 flex flex-col gap-3">
            {variantList.map(variant => (
              <div key={variant}>
                <div className="mb-1 font-medium text-sm text-gray-900">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </div>
                <div className="flex gap-4 items-center">
                  <Button variant={variant} size="smaller" disabled>
                    Smaller
                  </Button>
                  <Button variant={variant} size="small" disabled>
                    Small
                  </Button>
                  <Button variant={variant} size="medium" disabled>
                    Medium
                  </Button>
                  <Button variant={variant} size="standard" disabled>
                    Standard
                  </Button>
                  <Button variant={variant} size="big" disabled>
                    Big
                  </Button>
                  <Button variant={variant} size="bigger" disabled>
                    Bigger
                  </Button>
                </div>
              </div>
            ))}
          </div>
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
