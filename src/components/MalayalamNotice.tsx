export default function MalayalamNotice() {
  return (
    <section className="border-y border-gold/30 bg-ivory-deep">
      <div className="container-site flex flex-col gap-3 py-5 sm:flex-row sm:items-baseline sm:gap-6">
        <span className="eyebrow shrink-0 text-gold">മലയാളം</span>
        <p className="max-w-3xl text-[0.92rem] leading-relaxed text-charcoal/75">
          മലയാളം പതിപ്പ് ഒരുക്കി വരികയാണ്. ഇപ്പോൾ കാണുന്ന ഉള്ളടക്കം ഇംഗ്ലീഷിലാണ്;
          തിരഞ്ഞെടുത്ത വിഭാഗങ്ങൾ മലയാളത്തിൽ ചേർക്കുന്നതാണ്.
          <span className="mt-1 block text-[0.84rem] text-charcoal/50">
            The Malayalam edition is being prepared — professionally written
            translations will appear here.
          </span>
        </p>
      </div>
    </section>
  );
}
