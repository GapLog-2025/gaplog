import SmallGiantInfoCard from './SmallGiantInfoCard';
import LocationCard from './LocationCard';
import PopularIndustryCard from './PopularIndustryCard';

export default function CompanyAside() {
  return (
    <div className="flex flex-col gap-4">
      <SmallGiantInfoCard />
      <PopularIndustryCard />
      <LocationCard />
    </div>
  );
}
