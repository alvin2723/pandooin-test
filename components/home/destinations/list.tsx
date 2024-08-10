"use client";
import { getProducts } from "@/lib/action";
import { useQuery } from "@tanstack/react-query";
import DestinationItem, { DestinationItemSkeleton } from "./item";

const DestinationList = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => await getProducts(),
    queryKey: ["products"], //Array according to Documentation
  });
  if (isLoading) return <DestinationListSkeleton />;
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <div className="w-full flex flex-col">
      {products?.data?.map(
        (product: {
          itinerary_id: string;
          itinerary_day: number;
          itinerary_name: string;
          itinerary_short_description: string;
          itinerary_slug: string;
          partner_name: string;
          related_galleries: {
            gallery_alt_text: string;
            gallery_id: number;
            src: string;
          };
          related_variant: { itinerary_variant_pub_price: string };
        }) => {
          return (
            <DestinationItem
              key={product.itinerary_id}
              day={product.itinerary_day}
              title={product.itinerary_name}
              desc={product.itinerary_short_description}
              partnerName={product.partner_name}
              price={product.related_variant.itinerary_variant_pub_price}
              related_galleries={product.related_galleries}
            />
          );
        }
      )}
    </div>
  );
};

export default DestinationList;

export const DestinationListSkeleton = () => {
  return (
    <div className="w-full flex flex-col">
      <DestinationItemSkeleton />
    </div>
  );
};
