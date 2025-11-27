import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface WordEntryProps {
  word: {
    madde: string
    lisan?: string
    anlamlarListe: Array<{
      anlam_id: string
      anlam_sira: string
      anlam: string
      ozelliklerListe?: Array<{
        kisa_adi: string
      }>
      orneklerListe?: Array<{
        ornek: string
        yazar?: Array<{
          kisa_adi: string
        }>
      }>
    }>
    birlesikler?: string
  }
}

export function WordEntry({ word }: WordEntryProps) {
  return (
    <div className="space-y-6">
      {/* Word Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-medium tracking-tight text-balance">{word.madde}</h2>
        {word.lisan && <p className="text-sm text-muted-foreground italic">{word.lisan}</p>}
      </div>

      <Separator />

      {/* Meanings */}
      <div className="space-y-8">
        {word.anlamlarListe.map((anlam) => (
          <Card key={anlam.anlam_id} className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="mt-0.5 font-mono text-xs">
                {anlam.anlam_sira}
              </Badge>
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-2 flex-wrap">
                  {anlam.ozelliklerListe?.map((ozellik, idx) => (
                    <span key={idx} className="text-xs text-muted-foreground font-medium">
                      {ozellik.kisa_adi}
                    </span>
                  ))}
                  <p className="text-base leading-relaxed flex-1 text-pretty">{anlam.anlam}</p>
                </div>

                {/* Examples */}
                {anlam.orneklerListe && anlam.orneklerListe.length > 0 && (
                  <div className="space-y-2 pt-2">
                    {anlam.orneklerListe.map((ornek, idx) => (
                      <div key={idx} className="pl-4 border-l-2 border-muted space-y-1">
                        <p className="text-sm text-muted-foreground leading-relaxed italic text-pretty">
                          "{ornek.ornek}"
                        </p>
                        {ornek.yazar && ornek.yazar.length > 0 && (
                          <p className="text-xs text-muted-foreground">— {ornek.yazar[0].kisa_adi}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Related Terms */}
      {word.birlesikler && (
        <>
          <Separator />
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Birleşik Kelimeler</h3>
            <div className="flex flex-wrap gap-2">
              {word.birlesikler.split(", ").map((birlesmik, idx) => (
                <Badge key={idx} variant="outline" className="font-normal">
                  {birlesmik}
                </Badge>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
