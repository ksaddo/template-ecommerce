import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Return Policies", "Reviews", "Warranty"];

  return (
    <div className="w-full border border-gray-300">
      {/* Tab Headers */}
      <div className="flex gap-6 border-b border-gray-300 font-bold text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 ${
              activeTab === tab ? "border-b-2 border-black" : ""
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 text-sm text-gray-700">
        {activeTab === "Description" && (
          <p>
            Sleek design meets modern craftsmanship. This timepiece features a
            polished stainless-steel case with a slim profile and a refined
            mineral glass face. The adjustable leather strap offers comfort and
            versatility, while the precise quartz movement ensures reliable
            timekeeping. Built with durability in mind, it’s water-resistant for
            everyday wear
          </p>
        )}
        {activeTab === "Return Policies" && (
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              At <strong>Template</strong>, customer satisfaction is our
              priority. If you’re not completely happy with your purchase, we
              accept returns within <strong>30 days</strong> of delivery.
            </p>

            <p>
              To qualify, items must be unused, in their original condition, and
              include all packaging and accessories. Final sale items are not
              eligible for return.
            </p>

            <p>
              To start a return, contact us at{" "}
              <a
                href="mailto:support@yourcompany.com"
                className="text-blue-600">
                support@yourcompany.com
              </a>{" "}
              with your order number. We’ll provide instructions and recommend
              using a trackable shipping service.
            </p>

            <p>
              Refunds are issued to the original payment method within{" "}
              <strong>5–10 business days</strong> after we receive and inspect
              your item. Shipping fees are non-refundable unless the return is
              our error.
            </p>

            <p>
              We reserve the right to refuse returns that don’t meet these
              conditions. Updates to this policy will always be posted on our
              website.
            </p>
          </div>
        )}
        {activeTab === "Reviews" && <p>Extra details about the product.</p>}

        {activeTab === "Warranty" && (
          <div className="text-sm text-gray-700 leading-relaxed space-y-4">
            <p>
              All products purchased from <strong>Template Company</strong> come
              with a <strong>1-year limited warranty</strong> that covers
              manufacturing defects under normal use.
            </p>

            <p>
              This warranty includes faulty movements, defective parts, or
              workmanship errors. It does not cover accidental damage, wear and
              tear, misuse, or unauthorized repairs.
            </p>

            <p>
              To file a warranty claim, contact us at{" "}
              <a
                href="mailto:support@yourcompany.com"
                className="text-blue-600">
                support@yourcompany.com
              </a>{" "}
              with your order details and proof of purchase. If approved, we
              will repair or replace your item at no extra cost.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
