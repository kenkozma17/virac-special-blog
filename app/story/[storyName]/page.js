import Image from "next/image";
import Wrapper from "../../components/UI/Wrapper";
import ArticleHeader from "../../components/Blog/ArticleHeader";
export default function Story(props) {
  return (
    <>
      <Wrapper className="md:my-8 my-4" isSmall={true}>
        <Image
          className="w-full"
          src="/images/issues/1/dakila/cover.webp"
          width="1000"
          height="1000"
        />
        <ArticleHeader
          title="Dakila' Cafe"
          detail="A stairway to a Filipino Culinary Bliss."
          author="Kevin Kozma"
          date="September 30, 2023"
          categories={["Restaurants", "Dining", "Cafe"]}
        />
        <article
          className="flex flex-col space-y-8
          leading-9 font-merriweather md:px-10"
        >
          <p>
            Nestled along the picturesque coastline of Virac, a town famed for
            its serene landscapes and inviting shores, lies a culinary gem that
            has been etching its mark on the hearts and palates of both locals
            and travelers alike. The Sea Breeze Resto, a haven for those seeking
            exceptional dining experiences, has been an integral part of the
            community for years. With its recent move to a new location on
            Imelda Boulevard, this beloved establishment continues to redefine
            coastal dining while embracing its legacy of warm hospitality.
          </p>

          <p>
            Beyond the regular stream of loyal patrons&mdash;ranging from large
            families to intimate gatherings from both the town and neighboring
            areas&mdash;Sea Breeze Resto extends its welcoming arms to transient
            visitors. As weary travelers disembark from ferries or hop onto
            shuttle vans, the restaurant provides a competent and safe haven for
            them to satiate their hunger and quench their thirst. Should time
            permit, the allure of a leisurely dining experience awaits them as
            well.
          </p>

          <p>
            Since May 2023, the restaurant has found its new abode across the
            pier, adding a fresh dimension to its narrative. A familiar path
            runs parallel to its former location, and patrons are greeted by an
            all-glass indoor facility and an al fresco setup on both the second
            and topmost floors. The design seamlessly integrates with the
            breathtaking bay view, creating a picturesque backdrop that
            complements the culinary journey. From 6 am to 11 pm every day, Sea
            Breeze opens its doors to offer a feast for the senses, catering not
            only to gastronomical cravings but also to the craving for comfort
            and belonging. The embrace of modernity doesn't stop at the
            aesthetics alone; Sea Breeze Resto ensures that patrons experience
            utmost convenience in every aspect. The restaurant accommodates
            various payment methods, including cash, credit cards, and bank
            transfers, making it effortless for guests to enjoy their meals or
            arrange catering for significant events. For those seeking a preview
            of their diverse menu, the restaurant's presence on social media
            platforms like Facebook and Instagram offers a virtual glimpse into
            their culinary offerings.
          </p>

          <p>
            For half a decade, the dedicated chef of Sea Breeze Resto has been
            weaving innovation into each dish presented to guests. As they
            indulge in timeless favorites and savor the restaurant's signature
            seafood specialties, the patrons are treated to a symphony of
            flavors that celebrate the region's coastal bounty. During a
            conversation with Victor Laynes, the owner of Sea Breeze Resto, he
            shared insights about the exciting journey ahead. The restaurant's
            talented chef has a lineup of culinary creations in the
            &quot;Pipeline,&quot; promising fresh and delightful surprises for
            all who venture through the doors.
          </p>

          <p>
            In a world where dining experiences transcend mere sustenance, Sea
            Breeze Resto has carved a niche for itself by offering not just
            meals, but memories. Its journey from a modest eatery to a
            sophisticated culinary destination is a testament to its unwavering
            commitment to quality, innovation, and the art of bringing people
            together through the joy of food. As the sun sets over the tranquil
            bay, Sea Breeze Resto stands as a beacon of culinary excellence,
            inviting all to relish the flavors of life by the water's edge.
          </p>
        </article>
      </Wrapper>
    </>
  );
}
