import { Button } from "@/components/ui/button";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <section className="flex flex-col gap-4">
        <h2 className="text-primary text-2xl font-bold">Units</h2>

        <div>
          <section className="py-4">
            <h3 className="text-primary text-lg font-bold">Temperature</h3>

            <div>
              <div className="py-2">
                <h4>Celsius (°C)</h4>
              </div>

              <div className="py-2">
                <h4>Fahrenheit (°F)</h4>
              </div>
            </div>
          </section>

          <section className="py-4">
            <h3 className="text-primary text-lg font-bold">Other Units</h3>

            <div>
              <div className="flex flex-row items-center justify-between py-2">
                <h4>Wind</h4>
                <NativeSelect>
                  <NativeSelectOption value="km/h">
                    Kilometres per hour (km/h)
                  </NativeSelectOption>
                  <NativeSelectOption value="m/s">
                    Metres per second (m/s)
                  </NativeSelectOption>
                  <NativeSelectOption value="mph">
                    Miles per hour (mph)
                  </NativeSelectOption>
                  <NativeSelectOption value="knots">
                    Knots (knots)
                  </NativeSelectOption>
                </NativeSelect>
              </div>
              <Separator />
              <div className="flex flex-row items-center justify-between py-2">
                <h4>Precipitation</h4>
                <NativeSelect>
                  <NativeSelectOption value="mm">
                    Millimetres and centimetres (mm and cm)
                  </NativeSelectOption>
                  <NativeSelectOption value="in">
                    Inches (in)
                  </NativeSelectOption>
                </NativeSelect>
              </div>
              <Separator />
              <div className="flex flex-row items-center justify-between py-2">
                <h4>Pressure</h4>
                <NativeSelect>
                  <NativeSelectOption value="hPa">
                    Hectopascals (hPa)
                  </NativeSelectOption>
                  <NativeSelectOption value="inHg">
                    Inches of mercury (inHg)
                  </NativeSelectOption>
                </NativeSelect>
              </div>
              <Separator />
              <div className="flex flex-row items-center justify-between py-2">
                <h4>Distance</h4>
                <NativeSelect>
                  <NativeSelectOption value="km">
                    Kilometres (km)
                  </NativeSelectOption>
                  <NativeSelectOption value="mi">Miles (mi)</NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
          </section>

          <section className="flex w-fit flex-col gap-2 py-4">
            <h4 className="text-primary text-lg font-bold">Default Units</h4>
            <p>Set all units to the defaults.</p>
            <Button variant={"secondary"}>Restore Defaults</Button>
          </section>
        </div>
      </section>
    </div>
  );
}
